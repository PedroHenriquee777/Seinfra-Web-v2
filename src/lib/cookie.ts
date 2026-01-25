const setCookie = (name: string, value: string, days: number) => {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
  };
  const getCookie = (name: string) => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
    return false;
  };
  
  const Cookie = {
    setCookie,
    getCookie,
  };
  
  export default Cookie;
  