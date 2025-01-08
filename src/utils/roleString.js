
export const roleString = (role) => {
  switch (role) {
    case 'admin':
      return 'Administrador';
    case 'owner':
      return 'Propietario';
    case 'employee':
      return 'Colaborador';
    default:
      return 'Invitado';
  }
};