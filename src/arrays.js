export function logJoin(you, connector) {
  const result = you.join(connector);
  console.log(result);
}
logJoin(['max', 'john', 123, null], '_');
logJoin([1, 2, 3], '-');
