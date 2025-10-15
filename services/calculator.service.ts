// Store calculator results in memory (would be a database in production)
interface CalculatorResult {
  shareId: string;
  timestamp: number;
  data: any;
}

// In-memory store for calculator results (this would be a database in production)
const calculatorResultsStore = new Map<string, CalculatorResult>();

// Save calculator results and return a share ID
export const saveCalculatorResults = (data: any): { shareId: string; timestamp: number } => {
  const shareId = `calc-${Math.random().toString(36).substring(2, 10)}`;
  const timestamp = Date.now();
  
  calculatorResultsStore.set(shareId, {
    shareId,
    timestamp,
    data
  });
  
  // In production, this would be saved to a database
  return { shareId, timestamp };
};

// Retrieve calculator results by share ID
export const getCalculatorResultsById = (shareId: string): CalculatorResult | null => {
  if (!calculatorResultsStore.has(shareId)) {
    return null;
  }
  
  return calculatorResultsStore.get(shareId) || null;
};

// Clean up old calculator results (optional maintenance function)
export const cleanupOldResults = (): void => {
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  const now = Date.now();
  
  // Remove entries older than one week
  calculatorResultsStore.forEach((result, key) => {
    if (now - result.timestamp > ONE_WEEK_MS) {
      calculatorResultsStore.delete(key);
    }
  });
};