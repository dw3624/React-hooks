const useNetwork = onChange => {
  const [status, setStates] = useState(navigator.onLine)
  const handleChange  = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStates(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.removeEventListener("offline", handleChange);
    () => {
      window.addEventListener("online", handleChange)
    window.removeEventListener("offline", handleChange)
    };
  }, []);
  return status;
};