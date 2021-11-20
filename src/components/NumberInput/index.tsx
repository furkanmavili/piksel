type NumberInput = {
  title: string;
  value: number;
  add: () => void;
  remove: () => void;
};

function NumberInput({ title, value, add, remove }: NumberInput) {
  return (
    <div>
      <p>{title}</p>
      <div style={{ backgroundColor: "transparent" }} className="flex nes-container is-rounded is-dark">
        <button onClick={remove}>-</button>
        <div className="mx-5">{value}</div>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default NumberInput;
