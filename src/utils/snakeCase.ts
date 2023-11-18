function titleCaseToSnakeCase<T extends string>(input: T): string {
  return input
    .replace(/\s+/g, '_')
    .toLowerCase();
}

export default titleCaseToSnakeCase;
