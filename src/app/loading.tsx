// src/app/loading.tsx
export default function Loading() {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-primary" />
          <p className="text-lg font-semibold">Loading portfolio...</p>
        </div>
      </div>
    );
  }