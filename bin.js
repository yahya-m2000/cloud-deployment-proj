useEffect(() => {
  async function fetchUserData() {
    const res = await fetch("http://localhost:3000/users");
    const data = res.json();
    setData(data);
  }
  async function fetchMessageData() {
    const res = await fetch("http://localhost:3000/messages");
    const data = res.json();
    setData(data);
  }
  fetchUserData();
  fetchMessageData();
}, []);
