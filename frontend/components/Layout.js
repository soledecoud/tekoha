export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-skyblue">
        {children}
      </div>
    );
  }