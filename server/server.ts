import fastify from 'fastify';
import { fetchQuestions, submitQuestion, fetchQuestionsByTag } from '../lib/api';

const server = fastify({ logger: true });

interface QuestionRequestBody {
  question: string;
  tag: string;
}

interface QuestionParams {
  tag: string;
}

server.get('/api/questions', async (request, reply) => {
  const questions = await fetchQuestions();
  reply.send(questions);
});

server.get<{ Params: QuestionParams }>('/api/questions/:tag', async (request, reply) => {
  const { tag } = request.params;
  const questions = await fetchQuestionsByTag(tag);
  reply.send(questions);
});

server.post<{ Body: QuestionRequestBody }>('/api/questions', async (request, reply) => {
  const { question, tag } = request.body;
  const createdQuestion = await submitQuestion(question, tag);
  reply.send(createdQuestion);
});

const start = async () => {
  try {
    await server.listen(3001);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
