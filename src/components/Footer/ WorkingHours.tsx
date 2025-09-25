const workingHours = [
    { day: "Mon – Fri", time: "9AM – 8PM" },
    { day: "Sat – Sun", time: "9AM – 8PM" },
  ];
  
  export default function WorkingHours() {
    return (
      <div className="md:col-span-2 pr-4 border-r border-sky-200">
        <h3 className="font-semibold mb-4">Working Hours</h3>
  
        {workingHours.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between border-b border-sky-200 py-2"
          >
            <span className="text-sky-600">{item.day}</span>
            <span className="text-sky-600">{item.time}</span>
          </div>
        ))}
  
        <p className="text-xs text-slate-600 mt-6">
          © {new Date().getFullYear()} CONFIDENT — Design by Confident | Development by{" "}
          <a
            href="https://www.linkedin.com/in/abolfazltalebii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline"
          >
            Abolfazl Talebi
          </a>
        </p>
      </div>
    );
  }
  