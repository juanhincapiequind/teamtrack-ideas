import { Button, Form, Table } from "react-bootstrap";
import { useEmployee } from "../hook/useEmployee";
import { projects } from "../models/EmployeeMode";

const EmployeeGrid: React.FC = () => {
  const {
    employees,
    editingIndex,
    editName,
    editProject,
    editEndDate,
    editStartDate,
    setEditName,
    setEditProject,
    setEditStartDate,
    setEditEndDate,
    handleDuplicate,
    handleSave,
  } = useEmployee();

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Proyecto</th>
          <th>Nombre</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
              {editingIndex === index ? (
                <Form.Control
                  as="select"
                  value={editProject}
                  onChange={(e) => setEditProject(e.target.value)}
                >
                  {projects.map((proj) => (
                    <option key={proj} value={proj}> {proj}</option>
                  ))}
                </Form.Control>
              ) : (
                item.project
              )}
            </td>
            <td>
              {editingIndex === index ? (
                <Form.Control
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingIndex === index ? (
                <Form.Control
                  type="text"
                  value={editStartDate}
                  onChange={(e) => setEditStartDate(e.target.value)}
                />
              ) : (
                item.startDate
              )}
            </td>
            <td>
              {editingIndex === index ? (
                <Form.Control
                  type="text"
                  value={editEndDate}
                  onChange={(e) => setEditEndDate(e.target.value)}
                />
              ) : (
                item.endDate
              )}
            </td>

            <td>
              {editingIndex === index ? (
                <Button onClick={() => handleSave(index)}>Guardar</Button>
              ) : (
                <Button onClick={() => handleDuplicate(index)}>Duplicar</Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeGrid;
