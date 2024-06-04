export default function handler(req: any, res: any) {
  console.log("Received request to /api/dummy-message");
  res.status(200).json({ message: "This is a dummy message" });
}
