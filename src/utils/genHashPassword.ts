import * as bcrypt from 'bcrypt';

export const genHashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};
