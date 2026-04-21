export const createATask = async (formData) => {
  "use server";
  const name = formData.get("name");
  console.log("task form", formData);
};
