export const ResponseText = ({ responseText }) => {
  return (
    <div className="mb-6">
      <p className="text-gray-700 text-base leading-relaxed">
        I've found some books that match "{responseText}". Here are my top picks:
      </p>
    </div>
  );
};
