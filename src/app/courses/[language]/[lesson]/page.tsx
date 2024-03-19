import { getLessonAPI } from '@/apis/courses';

export default async function Lesson({
  params,
}: {
  params: { language: string; lesson: string };
}) {
  const lesson = await getLessonAPI({
    course: params.language,
    slug: params.lesson,
  });

  return (
    <>
      <h1>{lesson.nome}</h1>
      <h3>{lesson.slug}</h3>
      <h2>{lesson.descricao}</h2>
      <h2>{lesson.ordem}</h2>
      <h2>total de horas: {lesson.tempo}</h2>
    </>
  );
}
