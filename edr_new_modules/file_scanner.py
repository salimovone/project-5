class ScanFiles :
    def __init__(self, file_path):
        self.file_path = file_path
        self.scan_results = []
        self.scan_status = "Not Scanned"
    def scan(self):
        if self.file_path:
            self.scan_results.append(f"Scanned {self.file_path} successfully.")
            self.scan_status = "Scanned"
        else:
            self.scan_results.append("No file to scan.")
            self.scan_status = "Scan Failed"