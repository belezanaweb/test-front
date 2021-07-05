import { useEffect } from "react";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/checkout/cart");
  }, []);
  return null;
}

export default HomePage;
