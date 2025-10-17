import Blogcontent from "../Blogcontent";

export default function Page({ params }) {
  const { id } = params;
  return <Blogcontent blogId={id} />;
}
