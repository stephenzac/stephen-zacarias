import ListPlus from "./list-plus";

export default function ListElement({ text }: { text: string }) {
  return (
    <li>
      <ListPlus /> {text}
    </li>
  );
}
