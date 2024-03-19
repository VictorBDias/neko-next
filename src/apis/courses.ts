export type Course = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Lesson = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export async function listCoursesAPI() {
  const response = await fetch(`https://api.origamid.online/cursos`);
  const data = await response.json();
  return data as Course[];
}

export async function getCourseAPI({ slug }: { slug: string }) {
  const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
  const data = await response.json();
  return data as Course & {
    aulas: Lesson[];
  };
}

export async function getLessonAPI({
  course,
  slug,
}: {
  course: string;
  slug: string;
}) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${course}/${slug}`,
  );
  const data = await response.json();
  return data as Lesson;
}
