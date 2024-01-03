import Link from "next/link";

export default function StudentList() {
    const studentList = [
        { name: 'Divya Prakash Mishra', id: 1, age: 30 },
        { name: 'Shresth', id: 3, age: 1 },
        { name: 'Namrata', id: 4, age: 27 },
        { name: 'Amendra Rajpoot', id: 2, age: 28 },
    ];
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {studentList.map((student, index) => (
                    <li key={index}><Link href={'/studentlist/' + student.name}>{student.name}</Link></li>
                )
                )}
            </ul>
        </div>
    )
}