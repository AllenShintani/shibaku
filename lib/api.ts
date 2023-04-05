import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const submitQuestion = async (question: string, tag: string) => {
  const createdQuestion = await prisma.question.create({
    data: { content: question, tag },
  });
  return createdQuestion;
};

export const fetchQuestions = async () => {
  const questions = await prisma.question.findMany();
  return questions;
};

export const fetchQuestionsByTag = async (tag: string) => {
  const questions = await prisma.question.findMany({ where: { tag } });
  return questions;
};
