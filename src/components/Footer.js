export default function Footer({ name, email, phone, bankAccount, bankName }) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-500 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Name:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">E-mail:</span>
            {email}
          </li>
          <li>
            <span className="font-bold">Phone No.:</span>
            {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span>
            {bankName}
          </li>
          <li>
            <span className="font-bold">Account Holder:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">Account No.:</span>
            {bankAccount}
          </li>
        </ul>
      </footer>
    </>
  );
}
