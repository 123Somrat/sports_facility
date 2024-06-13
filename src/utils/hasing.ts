import bcrypt, { hash } from "bcrypt";

const generateHash = async (password: string) => {
  const salt = Number(process.env.BCRYPT_SALTROUND);
  const hash = bcrypt.hash(password, salt);

  return hash;
};

const mathingHased = async (password: string, hash: string) => {
  const hasMathed = await bcrypt.compare(password, hash);
  return hasMathed;
};

export { generateHash, mathingHased };
