let users = [
    { id: 1, name: "Harika", role: "Admin", status: "Active" },
    { id: 2, name: "Spandana", role: "User", status: "Inactive" },
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ];
  
  // Utility function to show sections
  function showSection(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  }
  
  // User Management
  function loadUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${user.name} - ${user.role} - ${user.status}
        <button onclick="deleteUser(${user.id})">Delete</button>
      `;
      userList.appendChild(li);
    });
  }
  
  function addUser() {
    const name = document.getElementById("userName").value;
    const role = document.getElementById("userRole").value;
  
    if (name && role) {
      users.push({ id: Date.now(), name, role, status: "Active" });
      loadUsers();
      document.getElementById("userName").value = "";
      document.getElementById("userRole").value = "";
    } else {
      alert("Please enter both name and role.");
    }
  }
  
  function deleteUser(id) {
    users = users.filter((user) => user.id !== id);
    loadUsers();
  }
  
  // Role Management
  function loadRoles() {
    const roleList = document.getElementById("roleList");
    roleList.innerHTML = "";
    roles.forEach((role) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${role.name} - ${role.permissions.join(", ")}
        <button onclick="deleteRole(${role.id})">Delete</button>
      `;
      roleList.appendChild(li);
    });
  }
  
  function addRole() {
    const name = document.getElementById("roleName").value;
    const permissions = document.getElementById("rolePermissions").value.split(",");
  
    if (name && permissions.length) {
      roles.push({ id: Date.now(), name, permissions });
      loadRoles();
      document.getElementById("roleName").value = "";
      document.getElementById("rolePermissions").value = "";
    } else {
      alert("Please enter role name and permissions.");
    }
  }
  
  function deleteRole(id) {
    roles = roles.filter((role) => role.id !== id);
    loadRoles();
  }
  
  // Initial Load
  document.addEventListener("DOMContentLoaded", () => {
    loadUsers();
    loadRoles();
  });
  