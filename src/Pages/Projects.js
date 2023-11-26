import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, DialogContent } from "@mui/material";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Lorem ipsum 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Lorem ipsum 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
  });
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [isValidTitle, setValidTitle] = useState(true);
  const [isValidDescription, setValidDescription] = useState(true);

  const handleAddProject = () => {
    if (isEditing) {
      if (newProject.title && newProject.description) {
        setProjects([...projects, newProject]);
        setNewProject({ title: "", description: "" });
        setIsEditing(false);
        setValidTitle(true);
        setValidDescription(true);
        return;
      }
      if (!newProject.title) setValidTitle(false);
      if (!newProject.description) setValidDescription(false);
      return;
    }
    setIsEditing(true);
  };

  const handleEditProject = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setNewProject(projects[index]);
  };

  const handleUpdateProject = () => {
    if (newProject.title && newProject.description) {
      const updatedProjects = [...projects];
      updatedProjects[editingIndex] = newProject;
      setProjects(updatedProjects);
      setNewProject({ title: "", description: "" });
      setEditingIndex(-1);
    }
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleCancel = () => {
    setEditingIndex(-1);
    setIsEditing(false);
  };
  return (
    <>
      {" "}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Projects
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        {isEditing ? (
          <Box>
            <TextField
              label="Title"
              fullWidth
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              error={!isValidTitle}
              helperText={!isValidTitle ? "Enter value" : ""}
            />
            <TextField
              label="Description"
              fullWidth
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              error={!isValidDescription}
              helperText={!isValidDescription ? "Enter value" : ""}
            />
          </Box>
        ) : (
          <></>
        )}
        {editingIndex === -1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProject}
          >
            Add Project
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateProject}
          >
            Update Project
          </Button>
        )}
        {isEditing ? (
          <>
            <Button variant="outlined" color="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Divider />
          </>
        ) : (
          <></>
        )}
      </Container>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ width: "80%", margin: "auto", paddingBottom: "30px" }}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="body1">{project.description}</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleEditProject(index)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteProject(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </Grid>
    </>
  );
}

export default Projects;
