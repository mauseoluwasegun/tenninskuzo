import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-gray-300 border-t-accent",
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const LoadingSkeleton = ({ className, children }: LoadingSkeletonProps) => {
  return (
    <div className={cn("animate-pulse bg-gray-200 rounded", className)}>
      {children}
    </div>
  );
};

interface LoadingCardProps {
  className?: string;
}

export const LoadingCard = ({ className }: LoadingCardProps) => {
  return (
    <div className={cn("p-6 border rounded-lg bg-white", className)}>
      <LoadingSkeleton className="h-4 bg-gray-200 rounded mb-4" />
      <LoadingSkeleton className="h-20 bg-gray-200 rounded mb-4" />
      <LoadingSkeleton className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <LoadingSkeleton className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LoadingOverlay = ({ isLoading, children, className }: LoadingOverlayProps) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-2 text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface TennisLoadingProps {
  className?: string;
}

export const TennisLoading = ({ className }: TennisLoadingProps) => {
  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <div className="relative">
        <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-500 text-lg animate-bounce">🎾</span>
        </div>
      </div>
    </div>
  );
};import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-gray-300 border-t-accent",
          sizeClasses[size]
        )}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const LoadingSkeleton = ({ className, children }: LoadingSkeletonProps) => {
  return (
    <div className={cn("animate-pulse bg-gray-200 rounded", className)}>
      {children}
    </div>
  );
};

interface LoadingCardProps {
  className?: string;
}

export const LoadingCard = ({ className }: LoadingCardProps) => {
  return (
    <div className={cn("p-6 border rounded-lg bg-white", className)}>
      <LoadingSkeleton className="h-4 bg-gray-200 rounded mb-4" />
      <LoadingSkeleton className="h-20 bg-gray-200 rounded mb-4" />
      <LoadingSkeleton className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <LoadingSkeleton className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LoadingOverlay = ({ isLoading, children, className }: LoadingOverlayProps) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-2 text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface TennisLoadingProps {
  className?: string;
}

export const TennisLoading = ({ className }: TennisLoadingProps) => {
  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <div className="relative">
        <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-500 text-lg animate-bounce">🎾</span>
        </div>
      </div>
    </div>
  );
};