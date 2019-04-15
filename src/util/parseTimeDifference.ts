export default function parseTimeDifference(input: number) {
  const seconds = input / 1000
  const minutes = seconds / 60
  const hours = (minutes / 60).toFixed(2)
  return {
    hours,
  }
}
