#!/bin/bash
SCRIPT_DIR=$(dirname $0)
MANAGE_CMD=${SCRIPT_DIR}/runManageCmd.sh

# ==============================================================================================================================
usage() {
  cat <<-EOF
  ========================================================================================
  Delete all OrgBook data for the specified Topic.
  ----------------------------------------------------------------------------------------
  Usage:
    ${0} <topic_id> [ -h ]
  
  Options:
    <topic_id> is the subject_id of the Topic to delete, e.g. BC1234567
    -h Prints the usage for the script
  ========================================================================================
EOF
exit
}

while getopts h FLAG; do
  case $FLAG in
    h ) usage
      ;;
  esac
done

shift $((OPTIND-1))
# ==============================================================================================================================

${MANAGE_CMD} delete_topic "$@"
