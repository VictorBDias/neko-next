import { getCourseAPI } from '@/apis/courses';
import Link from 'next/link';

export default async function Courses({
  params,
}: {
  params: { language: string };
}) {
  const course = await getCourseAPI({ slug: params.language });

  return (
    <>
      <h1>{course.nome}</h1>
      <h3>{course.slug}</h3>
      <h2>{course.descricao}</h2>
      <h2>total de aulas: {course.total_aulas}</h2>
      <h2>total de horas: {course.total_horas}</h2>
      {course.aulas.map((lesson) => {
        return (
          <Link href={`${params.language}/${lesson.slug}`} key={lesson.id}>
            <li>{lesson.nome}</li>
          </Link>
        );
      })}
    </>
  );
}
