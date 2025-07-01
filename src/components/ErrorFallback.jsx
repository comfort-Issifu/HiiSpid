import { Button } from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-500 mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <Button size="lg" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
