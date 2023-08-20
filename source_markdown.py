#!/usr/bin/env python3

import shutil
import os

source_dir = '/home/josh/Dropbox/notes/emotion/'  # Source directory
target_dir = './'  # Target directory
files_to_copy = [  # Files to copy
    '_ifs-depolarization-flow.md',
    '_ifs-part-flow.md',
    '_ifs-self-flow.md',
    '_ifs-situation-flow.md'
]

for file_name in files_to_copy:
    source_file_path = os.path.join(source_dir, file_name)
    target_file_name = file_name
    target_file_path = os.path.join(target_dir, target_file_name)
    # Copy source file to target directory
    shutil.copy2(source_file_path, target_file_path)
