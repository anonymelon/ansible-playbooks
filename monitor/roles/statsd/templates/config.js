{
  graphitePort: 2003
, graphiteHost: "{{ monitor_host }}"
, port: 8125
, backends: [ "./backends/graphite"]
}
