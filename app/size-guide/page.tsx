// Size Guide page for Kashya
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function SizeGuidePage() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 800, mx: "auto" }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontFamily: "Dancing Script, cursive", textAlign: "center" }}
      >
        Size Guide
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
        Find your perfect fit! Use the chart below to determine your size.
        Measurements are in inches.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Size</TableCell>
              <TableCell align="right">Bust</TableCell>
              <TableCell align="right">Waist</TableCell>
              <TableCell align="right">Hips</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { size: "XS", bust: "31-32", waist: "24-25", hips: "34-35" },
              { size: "S", bust: "33-34", waist: "26-27", hips: "36-37" },
              { size: "M", bust: "35-36", waist: "28-29", hips: "38-39" },
              { size: "L", bust: "37-39", waist: "30-32", hips: "40-42" },
              { size: "XL", bust: "40-42", waist: "33-35", hips: "43-45" },
            ].map((row) => (
              <TableRow key={row.size}>
                <TableCell>{row.size}</TableCell>
                <TableCell align="right">{row.bust}</TableCell>
                <TableCell align="right">{row.waist}</TableCell>
                <TableCell align="right">{row.hips}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 2, textAlign: "center" }}
      >
        *Sizing may vary by style. Please refer to product descriptions for more
        details.
      </Typography>
    </Box>
  );
}
