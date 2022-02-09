import d3 from 'd3';
export function checkD3EventLoop(event: any) {
  if (!d3.event.sourceEvent) return true;
  if (event) return d3.event.sourceEvent.type === event;
  return ['start', 'brush', 'end'].includes(d3.event.sourceEvent.type);
}
