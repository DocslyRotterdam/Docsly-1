import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function Custom404() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Upps, page not found</h3>
      <Image src="/404.svg" width={400} height={500} objectFit="contain" />
      <div
        onClick={() => {
          router.push("/");
        }}
        className="buttonFill reverse"
        style={{ borderColor: "black", color: "black" }}
      >
        Go back to home page
        <div className="hiddenWave" style={{ backgroundColor: "black" }}></div>
      </div>
    </div>
  );
}
