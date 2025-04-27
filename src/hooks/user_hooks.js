import bcrypt from "bcryptjs";

export default (User) => {
  User.beforeSave(async (user, options) => {
    if (user.changed('password')) {
    user.password=await bcrypt.hash(user.password, 10);
    }
  });
};
