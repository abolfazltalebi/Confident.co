type FooterMenuProps = {
    title: string;
    items: string[];
  };
  
  export default function FooterMenu({ title, items }: FooterMenuProps) {
    return (
      <div>
        <h3 className="font-semibold mb-4">{title}</h3>
        <ul className="space-y-4 text-slate-600">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  