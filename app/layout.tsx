import "@/css/layout.css";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <link rel={"icon"} href={"/favicon.ico"} />
        <title>Utah Grown</title>
        <meta
          name={"description"}
          content={
            "Utah Grown is committed to assisting patients on their medical cannabis journey, by providing education and resources to help streamline and simplify the Utah medical cannabis process."
          }
        />
      </head>
      {props.children}
    </html>
  );
}
