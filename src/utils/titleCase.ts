function snakeCaseToTitleCase<T extends string>(input: T): string {
  return input
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default snakeCaseToTitleCase;
