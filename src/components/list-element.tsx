export default function ListElement({ text }: { text: string }) {
  return (
    <li>
      <span className="text-lighterAccent ml-4 text-lg">+ </span> {text}
    </li>
  );
}
