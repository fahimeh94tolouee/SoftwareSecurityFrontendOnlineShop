export default user => {
  let name = "";
  if (user) {
    if (user.first_name || user.last_name) {
      if (user.first_name) {
        name = user.first_name;
      }
      if (user.last_name) {
        if (name) {
          name += ` ${user.last_name}`;
        } else {
          name += user.last_name;
        }
      }
    } else if (user.email) {
      name = `${user.email}`;
    }
  }
  return name;
};