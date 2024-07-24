import { useState } from "react";
import { Employee } from "../models/EmployeeI";
import { employees as initialEmployee } from "../models/EmployeeMode";

export const useEmployee = () => {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployee);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editProject, setEditProject] = useState<string>("");
  const [editStartDate, setEditStartDate] = useState<string>("");
  const [editEndDate, setEditEndDate] = useState<string>("");

  const handleDuplicate = (index: number) => {
    const employeeToDuplicate = employees[index];
    const newEmployee = {
      ...employeeToDuplicate,
      id: employees.length + 1,
    };
    setEmployees([...employees, newEmployee]);
    setEditingIndex(employees.length);
    setEditName(newEmployee.name);
    setEditStartDate(newEmployee.startDate);
    setEditEndDate(newEmployee.endDate);
    setEditProject(newEmployee.project);
  };

  const handleSave = (index: number) => {
    const updatedEmployees = employees.map((employee, i) =>
      i === index
        ? {
            ...employee,
            name: editName,
            project: editProject,
            endDate: editEndDate,
            startDate: editStartDate,
          }
        : employee
    );
    setEmployees(updatedEmployees);
    setEditingIndex(null);
    setEditName("");
    setEditProject("");
  };

  return {
    employees,
    editingIndex,
    editName,
    editProject,
    editEndDate,
    editStartDate,
    setEditEndDate,
    setEditStartDate,
    setEditName,
    setEditProject,
    handleDuplicate,
    handleSave,
  };
};
