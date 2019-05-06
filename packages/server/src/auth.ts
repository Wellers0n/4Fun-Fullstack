
import jwt from 'jsonwebtoken';
import User from './model/users';
import mongoose from 'mongoose'
import console = require('console');

export async function getUser(token: string) {
  if (!token) return { user: null };

   try {
    const decodedToken:any = jwt.verify(token, 'batman');

    const user = await User.findOne({ _id: decodedToken.id });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

type UserType = {
  _id: string,
};

export function generateToken(user: UserType) {
  return jwt.sign({id: user._id}, 'batman');
}