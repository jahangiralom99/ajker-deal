export const loader = async () => {
  let base_url = "https://erpmethods.vercel.app";
  let header = {
    url: "https://erp.gawsiashop.com.bd/",
    api_secret: "bcc0df87d4b1a77",
    api_key: "092867a6814bfc7",
  };

  const groupsData = await fetch(`${base_url}/gets/Item Group?filters=[["show_in_website", "=", 1]]&fields=["route","name", "image"]`, {
    method: "GET",
    headers: header,
  });
  const groups = await groupsData.json();

  const itemsData = await fetch(`${base_url}/gets/Website Item?filters=[["published", "=", 1]]`, {
    method: "GET",
    headers: header,
  });
  const webItems = await itemsData.json();

  const itmRate = await fetch(`${base_url}/gets/Item?filters=[["published_in_website", "=", 1]]&fields=["*"]`, {
    method: "GET",
    headers: header,
  });
  const items = await itmRate.json();

  return {groups, webItems, items};
};
