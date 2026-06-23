import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([]);
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const addAssignment = () => {
    if (subject === "" || title === "") {
      alert("Please enter all fields");
      return;
    }

    const newAssignment = {
      subject,
      title,
      status,
    };

    setAssignments([...assignments, newAssignment]);

    setSubject("");
    setTitle("");
    setStatus("Pending");
  };

  const deleteAssignment = (index) => {
    const updated = assignments.filter((_, i) => i !== index);
    setAssignments(updated);
  };

  return (
    <div className="container">
      <h1>College Assignment Submission Tracker</h1>

      <input
        type="text"
        placeholder="Subject Name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Submitted</option>
      </select>

      <button onClick={addAssignment}>Add Assignment</button>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assignment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteAssignment(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;