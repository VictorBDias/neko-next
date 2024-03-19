import { listCoursesAPI } from '@/apis/courses';
import Link from 'next/link';

export default async function Courses() {
  const courses = await listCoursesAPI();

  return (
    <ul>
      {courses.map((course) => {
        return (
          <Link href={`courses/${course.slug}`} key={course.id}>
            <li>{course.nome}</li>
          </Link>
        );
      })}
    </ul>
  );
}
