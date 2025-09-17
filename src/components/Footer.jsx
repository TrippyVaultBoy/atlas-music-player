export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-3 text-offwhite">&copy; {year} Atlas School</div>;
}
