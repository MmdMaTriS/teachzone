export default function CourseID({ params }: { params: { courseID: string } }) {
  return <div>Course ID: {params["courseID"]}</div>;
}
