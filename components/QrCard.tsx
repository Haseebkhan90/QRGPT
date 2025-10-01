interface QrCardProps {
  imageURL: string;
  time: string;
}

export const QrCard = ({ imageURL, time }: QrCardProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-y-2 w-full max-w-sm">
      {/* Temporary fix - use img instead of Next Image */}
      <img
        src={imageURL}
        alt="Generated QR Code"
        className="w-64 h-64 rounded-lg border border-gray-300"
      />
      <p className="text-sm text-gray-600">Generated in {time}s</p>
    </div>
  );
};